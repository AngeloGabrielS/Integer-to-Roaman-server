class RomanService {
    public static int2ROM(int: string) {
       
        var digits = int.split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
        "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
        "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman_num = "",

        i = 3;

        while (i--)
            roman_num = (key[Number(digits.pop()) + (i * 10)] || "") + roman_num;

        return roman_num;
    }
}
export default RomanService; 