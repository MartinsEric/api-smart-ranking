import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/jogadores')
export class JogadoresController {

  @Post()
  async criarAtualizarJogadores() {
    return JSON.stringify({nome: 'Eric'});
  }
}
