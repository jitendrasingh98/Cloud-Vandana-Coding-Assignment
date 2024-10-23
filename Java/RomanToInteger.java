import java.util.Scanner;

public class RomanToInteger {
        public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a Roman number: ");
        String romnum = scan.nextLine();
        int result = romanToInt(romnum);
        System.out.println("The integer value is: " + result);
        scan.close();
    }
    public static int romanToInt(String str) {
        int result = 0;
        int[] numArr = {1000,  900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] romanArr = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        for (int i = 0; i < numArr.length; i++) {
            while (str.indexOf(romanArr[i]) == 0) {
                result = result + numArr[i];
                str = str.substring(romanArr[i].length());
            }
        }
        return result;
    }
}