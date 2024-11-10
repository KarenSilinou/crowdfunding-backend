import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFundDto } from './dto/create-fund.dto';
import { Fund } from 'src/fund.schema';
import { UpdateFundDto } from './dto/update-fund.dto';
import { FundModel } from './fund.model';

@Injectable()
export class FundService {
  constructor(@InjectModel(Fund.name) private fundModel: Model<Fund>) {}

  async createFund(createFundDto: CreateFundDto): Promise<Fund> {
    const createdFund = new this.fundModel(createFundDto);
    return createdFund.save();
  }
  async getFunds(): Promise<any[]> {
    return await FundModel.find();
  }

  // Récupérer tous les fonds
  async findAll(): Promise<Fund[]> {
    return this.fundModel.find().exec();
  }

  // Récupérer un fond par ID
  async findOne(id: string): Promise<Fund> {
    return this.fundModel.findById(id).exec();
  }

  // Incrémenter le montant d'un fond
  async incrementFund(id: string, amount: number): Promise<Fund> {
    const fund = await this.findOne(id);
    if (!fund) throw new NotFoundException('Fund not found');

    fund.raise += amount;
    return fund.save();
  }

  // Mettre à jour ou sauvegarder un fond existant
  async update(id: string, updateFundDto: UpdateFundDto): Promise<Fund> {
    const existingFund = await this.fundModel.findByIdAndUpdate(id, updateFundDto, { new: true });
    if (!existingFund) throw new NotFoundException('Fund not found');
    return existingFund;
  }
}
