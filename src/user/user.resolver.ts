import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserDetails } from './dto/user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  getUser(@Args('userId') userId: number): Promise<User> {
    return this.userService.findUserById(userId);
  }

  @Mutation(() => User)
  createUser(@Args('userDetails') userDetails: UserDetails): Promise<User> {
    return this.userService.createUser(userDetails);
  }
}
