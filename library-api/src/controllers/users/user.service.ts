import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/users/user.repository';
import { UserModel } from 'library-api/src/models'; // Assurez-vous que le chemin d'importation est correct

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers() {
    return this.userRepository.find();
  }

  async createUser(userData: UserModel) {
    // Créez une nouvelle instance de l'entité utilisateur à partir du modèle
    const newUser = this.userRepository.create(userData);
    
    // Enregistrez le nouvel utilisateur en utilisant le repository
    return this.userRepository.save(newUser);
  }
}
