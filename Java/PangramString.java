import java.util.Scanner;

public class PangramString {
        public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter a string :");
        String str = scanner.nextLine();
        
        boolean isPangram = isPangram(str);
        
        if (isPangram) {
            System.out.println(str+ " is a pangram.");
        } else {
            System.out.println(str + " is not a pangram.");
        }
        
        scanner.close();
    }
    public static boolean isPangram(String str) {
        boolean[] letterPresence = new boolean[26];
        int index;
        //change string to lower case
        str = str.toLowerCase();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c >= 'a' && c <= 'z') {
                index = c - 'a'; // Calculate the index 
                letterPresence[index] = true; 
            }
        }

        
        for (boolean present : letterPresence) {
            if (!present) {
                return false; 
            }
        }
        
        return true; 
    }

}