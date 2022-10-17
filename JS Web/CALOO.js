class dato {
    public static int opc1, opc2;
    public int accion() {
        int opcion;
        System.out.println("Elija la operacion a realizar:"
                + "\n1. Suma"
                + "\n2. Resta"
                + "\n3. Multiplicacion"
                + "\n4. Division");
        opcion = entrada.nextInt();
        return opcion;
    }
    public static void suma(int num1, int num2) {
        System.out.println("La suma de la operacion es:" + (num1 + num2));
    }
    public void resta(int num1, int num2) {
        System.out.println("La resta de la operacion es: " + (num1 - num2));
    }
    public void multiplicacion(int num1, int num2) {
        System.out.println("La multiplicacion de la operacion es: " + (num1 * num2));
    }
    public void division(int num1, int num2) {
        System.out.println("La division de la operacion es: " + (num1 / num2));
    }
}
public class Calculadora { 
    public static void main(String[] args) {
        int num1, num2;
        int opcion;
        dato datos = new dato();
        opcion = datos.accion();
        while (opcion > 0 && opcion <= 5) {
            System.out.print(((opcion==1)?"Digite Sumando 1":(opcion==2)?"Digite Restando":(opcion==3)?"Digite Dividendo":(opcion==4))+ "   -> ");
            num1 = entrada.nextint();
            System.out.print(((opcion==1)?"Digite Sumando 2":(opcion==2)?"Digite Sustraendo":(opcion==3)?"Digite Divisor":(opcion==4))+ "   -> ");
            num2 = entrada.nextint();
            switch (opcion) {
                case 1:datos.suma(num1, num2); opcion = datos.accion();break;
                case 2:datos.resta(num1, num2);opcion = datos.accion(); break;
                case 3:datos.division(num1, num2); opcion = datos.accion();break;
                case 4:datos.multiplicacion(num1, num2);opcion = datos.accion();break;
                case 5:datos.potencia(num1, num2); opcion = datos.accion();break;
            }
        }
    }
}