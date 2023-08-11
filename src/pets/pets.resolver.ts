import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pets } from './pets.entity';
import { PetDetails } from './dto/pets.dto';

@Resolver(() => Pets)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pets])
  getAllPets(): Promise<Pets[]> {
    return this.petsService.getAllPets();
  }

  @Mutation(() => Pets)
  createPet(@Args('petDetails') petDetails: PetDetails): Promise<Pets> {
    return this.petsService.createPet(petDetails);
  }
}
