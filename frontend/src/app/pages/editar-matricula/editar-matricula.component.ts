import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioMatriculaComponent } from '../../components/formulario-matricula/formulario-matricula.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-editar-matricula',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    FormularioMatriculaComponent,
  ],
  templateUrl: './editar-matricula.component.html',
  styleUrl: './editar-matricula.component.css',
})
export class EditarMatriculaComponent {
  alunoId: string | null;
  alunoData = {
    nome: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
    email: '',
    turma: {
      id: '',
      nome: '',
      serieAno: '',
      turno: '',
    },
  };
  alunoDataEndereco = {
    cep: '',
    numero: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: '',
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.alunoId = this.route.snapshot.paramMap.get('id');

    if (this.alunoId) {
      this.userService.getUserById(this.alunoId).subscribe({
        next: (user) => {
          this.alunoData = {
            nome: user.nome,
            dataNascimento: user.dataNascimento,
            cpf: user.cpf,
            telefone: user.telefone,
            email: user.usuario.email,
            turma: user.turma || {
              id: '',
              nome: '',
              serieAno: '',
              turno: '',
            },
          };

          // if (user.turma) {
          //   this.turma = `${user.turma.nome} | ${user.turma.serieAno} | ${user.turma.turno}`;
          // }

          this.alunoDataEndereco = {
            cep: user.endereco.cep,
            numero: user.endereco.numero,
            logradouro: user.endereco.logradouro,
            bairro: user.endereco.bairro,
            cidade: user.endereco.cidade,
            estado: user.endereco.estado,
            complemento: user.endereco.complemento || '',
          };
        },
        error: (error) => {
          console.error('Não foi possível achar o aluno pelo id:', error);
        },
      });
    }
  }
}
