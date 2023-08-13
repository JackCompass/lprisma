import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDetails } from './dto/user.dto';
import { User } from './user.entity';
import { GraphQLError } from 'graphql/error';
import { BAD_USER_INPUT, badUserIdInputMessage } from './constant';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUserById(userId: number): Promise<User> {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
      });
    } catch (error) {
      throw new GraphQLError(badUserIdInputMessage(userId), {
        extensions: {
          code: BAD_USER_INPUT,
          user_id: userId,
        },
      });
    }
  }

  async createUser(userDetails: UserDetails): Promise<User> {
    // log user details
    userDetails = {
      ...userDetails,
      full_name: userDetails.first_name + ' ' + userDetails.last_name,
    };
    return this.prisma.user.create({
      data: userDetails,
    });
  }
}
