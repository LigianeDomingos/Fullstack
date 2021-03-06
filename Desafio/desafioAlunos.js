// Base a ser utilizada
const alunosDaEscola = [
    {
        nome: "Henrique",
        notas: [],
        cursos: [],
        faltas: 5
    },
    {
        nome: "Edson",
        notas: [],
        cursos: [],
        faltas: 2
    },
    {
        nome: "Bruno",
        notas: [10, 9.8, 9.6],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Guilherme",
        notas: [10, 9.8, 9.6],
        cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }],
        faltas: 0
    },
    {
        nome: "Carlos",
        notas: [],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Lucca",
        notas: [10, 9.8, 9.6],
        cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }],
        faltas: 0
    }];


// implementação

/*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/


function adicionarAluno(addnome) {

    let novoAluno = {
        nome: addnome,
        notas: [],
        cursos: [],
        faltas: 0
    };

    alunosDaEscola.push(novoAluno);

    return "Aluno adicionado com sucesso!";

};
console.log(adicionarAluno("Ligiane"));
console.log("____________________________________");


/*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
Vale dizer que As informações deverão ser exibidas em um formato amigável.*/

function listarAlunos() {

    console.log("Lista de Alunos:");
    console.log("                ");
    console.log(" ref.  " + "Nome");

    for (let i = 0; i < alunosDaEscola.length; i++) {

        console.log(
            " " + [i] + "     " + alunosDaEscola[i].nome
            /*+"|"
            +"Notas = "+alunosDaEscola[i].notas +"|" 
            +"Cursos = "+(alunosDaEscola[i].cursos.length?alunosDaEscola[i].cursos[0].nomeDoCurso:"ND consta") +"|"
            +"Faltas = "+alunosDaEscola[i].faltas+"|"*/);
    }

};
listarAlunos();
console.log("____________________________________");

function buscarAluno(nome:string){
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
   }
    function matricularAluno(aluno:object, curso:string){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
   }
    function aplicarFalta(aluno:object){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
    }
    
    function aplicarNota(aluno:object){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
   }
   
     function aprovarAluno(aluno:object){
     /* 
     Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
     Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
     */
     }