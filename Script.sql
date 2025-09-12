create table turma(
	turma_id serial primary key,
	serie int not null,
	num_sala int not null,
	num_turma int not null,
	professor_id int not null,
	foreign key (professor_id) references professor(professor_id)
);

create table aluno(
	aluno_id serial primary key,
	nome varchar(100) not null,
	pet char(7) not null unique,
	senha varchar(20) not null,
	turma_id int not null,
	foreign key (turma_id) references turma(turma_id)
);


create table professor(
	professor_id serial primary key,
	nome varchar(100) not null,
	cpf char(11) not null unique,
	senha varchar(20) not null
);

create table materia(
	materia_id serial primary key,
	nome varchar(50) not null,
	professor_id int not null,
	obrigatorio boolean not null,
	foreign key (professor_id) references professor(professor_id)
);

create table boletim(
	boletim_id serial primary key,
	materia_id int not null,
	trimestre_id int not null,
	media_final int not null,
	recuperacao int,
	aluno_id int not null,
	foreign key (materia_id) references materia(materia_id),
	foreign key (trimestre_id) references trimestre(trimestre_id),
	foreign key (aluno_id) references aluno(aluno_id)
);

create table trimestre(
	trimestre_id serial primary key,
	num varchar(20) not null,
	materia_id int not null,
	media_final int not null,
	recuperacao int,
	aluno_id int not null,
	foreign key (materia_id) references materia(materia_id),
	foreign key (aluno_id) references aluno(aluno_id)
);

create table atividade(
	atividade_id serial primary key,
	nome varchar(20) not null,
	descricao text not null,
	data date not null,
	materia_id int not null,
	professor_id int not null,
	turma_id int not null,
	foreign key (materia_id) references materia(materia_id),
	foreign key (professor_id) references professor(professor_id),
	foreign key (turma_id) references turma(turma_id)
);

insert into professor (nome,cpf,senha) values ('Marcela',18989889006,'matematica123');

insert into turma (serie,num_sala,num_turma) values (2,311,660);

insert into trimestre (num) values('primeiro');

insert into aluno (nome,pet,senha,turma_id) values ('Thomas Bayão', 0133879, 'sim', 1);

insert into materia (nome,professor_id,obrigatorio) values ('Matemática',2,true);

insert into boletim (materia_id,trimestre_id,media_final,recuperacao,aluno_id) values (1,1,48,20,1);

insert into atividade (nome,descricao,"data", materia_id, professor_id, turma_id) values ('atividade','É importante, faz ai','2025-10-27',1,2,1);



