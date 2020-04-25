public class TestaCursoComAluno {
    public static void main(String[] args) {
        Curso javaColencoes = new Curso("dominando as coleções do java", "Paulo Silveira");
        javaColencoes.adiciona(new Aula("trabalhando com ArrayList", 21));
        javaColencoes.adiciona(new Aula("criando uma aula", 20));
        javaColencoes.adiciona(new Aula("modelando coleções", 22));
        Aluno a1 = new Aluno("marcio", 15249);
        Aluno a2 = new Aluno("jorge", 15241);
        Aluno a3 = new Aluno("roberto", 15245);

        javaColencoes.matricula(a1);
        javaColencoes.matricula(a2);
        javaColencoes.matricula(a3);

        javaColencoes.getAlunos().forEach(a -> System.out.println(a));

        System.out.println(javaColencoes.estaMatriculado(a1));
    }
}
