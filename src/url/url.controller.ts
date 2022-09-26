import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUrlDto } from './dto/create-url.dto';
import { UrlService } from './url.service';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Get(':urlCode')
  async redirect(@Param('urlCode') urlCode: number, @Res() response: Response) {
    const longUrl = await this.urlService.redirect(urlCode);
    return response.redirect(longUrl);
  }

  @Get()
  async index() {
    return await this.urlService.getAllUrls();
  }

  @Post()
  async shortenUrl(@Body() urlDto: CreateUrlDto) {
    console.log(urlDto);
    return this.urlService.createUrl(urlDto);
  }
}
