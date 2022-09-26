import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './entity/url.entity';
import { nanoid } from 'nanoid';
import { CreateUrlDto } from './dto/create-url.dto';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url) private readonly urlRepository: Repository<Url>,
  ) {}

  async getAllUrls() {
    const urls = await this.urlRepository.find({
      order: {
        id: 'DESC',
      },
    });
    return urls;
  }

  async createUrl(url: CreateUrlDto) {
    const { longUrl, title } = url;
    const urlCode = Math.floor(Math.random() * 100000) + 1;
    const baseUrl =
      'https://3000-psmoke2-psmoke2-cv5fj266ne3.ws-eu67.gitpod.io';

    try {
      let url = await this.urlRepository.findOne({
        where: { longUrl },
      });
      if (url) return (await url).shortUrl;

      const shortUrl = `${baseUrl}/${urlCode}`;

      url = await this.urlRepository.create({
        title,
        urlCode,
        shortUrl,
        longUrl,
      });

      await this.urlRepository.save(url);
      return {
        urlCode,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred. Please try again.',
      );
    }
  }

  async redirect(code: number) {
    try {
      const url = await this.urlRepository.findOne({
        where: { urlCode: code },
      });
      if (url) return url.longUrl;
    } catch (error) {
      throw new NotFoundException('Resource not found.');
    }
  }
}
