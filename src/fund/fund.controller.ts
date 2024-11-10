import { Controller, Get, Post, Patch, Body, Param, InternalServerErrorException } from '@nestjs/common';
import { CreateFundDto } from './dto/create-fund.dto';
import { FundService } from './fund.service';
import { UpdateFundDto } from './dto/update-fund.dto';

@Controller('funds')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  // Créer un nouveau fond
  
  @Post()
  async createFund(@Body() createFundDto: CreateFundDto) {
    try {
      const newFund = await this.fundService.createFund(createFundDto);
      return newFund;
    } catch (error) {
      throw new Error('Erreur lors de la création du fond: ' + error.message);
    }
  }

  @Get('funds')
getAllFunds() {
  try {
    return this.fundService.getFunds();
  } catch (error) {
    throw new InternalServerErrorException('Error fetching funds');
  }
}

  @Get()
  async getFunds() {
    return this.fundService.getFunds();
  }

  @Get()
  findAll() {
    return this.fundService.findAll();
  }

  // Récupérer un fond par son ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundService.findOne(id);
  }

  // Ajouter un montant à un fond existant
  @Patch(':id/increment')
  incrementFund(@Param('id') id: string, @Body() updateFundDto: UpdateFundDto) {
    return this.fundService.incrementFund(id, updateFundDto.amount);
  }

  // Mettre à jour ou sauvegarder les informations d'un fond existant
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFundDto: UpdateFundDto) {
    return this.fundService.update(id, updateFundDto);
  }
}
