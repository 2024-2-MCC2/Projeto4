create DATABASE Sayb;
use Sayb;
Create Table Projeto (
CodigoProjeto INTEGER PRIMARY KEY,
NomeProjeto varchar (1000) not null,
EnderecoProjeto varchar (1000),
TelefoneProjeto varchar (1000) not null
);
Create Table Aluno(
CPF int primary key,
CodigoProjeto integer,
NomeAluno varchar (1000) not null,
IdadeAluno varchar (1000) not null,
TelefoneAluno varchar (1000) not null,
EmailAluno varchar (1000) not null
);