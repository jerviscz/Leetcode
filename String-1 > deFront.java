/* Given a string, return a version without the first 2 chars. Except keep 
 * the first char if it is 'a' and keep the second char if it is 'b'. The 
 * string may be any length. Harder than it looks.
 */

public String deFront(String str) {    
  String temp = "";
  for(int i = 0; i < str.length(); i++){
    if(i == 0 && str.charAt(i) == 'a'){
      temp += 'a';
    }
    else if(i == 1 && str.charAt(i) == 'b'){
      temp += 'b';
    }else if(i > 1){
      temp += str.charAt(i);
    }
  }
  return temp;
}