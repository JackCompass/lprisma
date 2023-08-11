import { Injectable } from '@nestjs/common';
import { Pets } from './pets.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { PetDetails } from './dto/pets.dto';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  async getAllPets(): Promise<Pets[]> {
    return this.prisma.pets.findMany();
  }

  async createPet(petDetails: PetDetails): Promise<Pets> {
    return this.prisma.pets.create({
      data: petDetails,
    });
  }
}
