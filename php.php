<?php "IN THE NAME OF GOD"?>

VARIABLES:

$name

//amalgar haye moghayeseei va rabetei:

tasavi => ==
namosavi => != , <>;
tasavii eyniii (indentity) => ===;
Natasavii eyniii => !==;

//amalgarhaye manteghie

atfi: AND => && , and;
fsli: OR => || , or;
naghize: NOT => !;
XOR: => xor;

//amalgar haye biti : rooye sefr va yek ha kar mikonand
atfi: AND => &;
fsli: OR => |;
naghize: NOT => ~;
XOR: => ^;
Sift ha : << , >>;

//maghadir sharti:

$x = ($a>0) ?  1 : 0;
--    ----     --  --
x  =  shart ? treue : fasle;

//in php7:

spase ship: $a<=>$b => + , 0 , -;

null coalesce: $a ?? $b ?? $c => if $a=null use $b if $b=null...

// you can read the document php operators precedence it meanes taghadom amalgarha

//varr sabet : const in JS
define('pi',3.14);

/* delete element of array */
$a = [12,10,15,111,"pooo",12];
unset($a[4]);

/* sum of array */

$a = array(1,3,5,7,9);
$b = array(2,4,6,8,10,12,14);

$c = $a + $b;//-->[1,3,5,7,9,12,14]
$d = $b + $a;//-->[2,4,6,8,10,12,14]
$e = array_merge($a, $b);//-->[1,3,5,7,9,2,4,6,8,10,12,14]
$f = array_merge($b, $a);//-->[2,4,6,8,10,12,14,1,3,5,7,9]

/* Show 2 array eqully on not */

$a =[1,2,3];
$b =[1,2,3];

var_dump($a == $b);//--> bool(true)
var_dump($a != $b);//--> bool(false)

/* delete element of array */

$a = [12,10,15,111,"pooo",12];

unset($a[4]);

echo '<pre>';
	print_r($a);//-->[12,10,15,111,12]
echo '</pre>';

echo count($a);//--> 5 (like a.lenght in JS) lenght of number
strlen($str);//lenght of string

$keys = array_keys($a);//-->[0,1,2,3,4,5]
$values = array_values($a);//-->[12,10,15,111,"pooo",12]

var_dump(isset($a[1]));//--> bool(true)
var_dump(isset($a['a']));//--> bool(false)

$search = array_search(111, $a);
echo $search ;//--> 3;



/* Use sort */

$b = [12,10,15,111,"pooo",13,1,18,5,"abol"];

 sort($b);
 rsort($b);
 asort($b);
 arsort($b);
 ksort($b);
 krsort($b);
 shuffle($b);//sort random 
 
 /* split and get in array */
 
 $alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'
 
 str_split($alphabet);//make array from $alphabet
 
 
 /* sum whole of array */
 
 array_unique();
 
 $a = [1,12,15,2]
 
 $c = array_sum($a);//-->$c = 30;
 
 /* delete reppetion in array */
 
 $input = array(
 "a" => "green", 
		"red", 
 "b" => "green",
		"blue",
		"red"
 );
 
 $result = array_unique($input);
 
 print_r($result);//--> :
 Array
(
    [a] => green
    [0] => red
    [1] => blue
)

//--------------------------

/* tag pre */

hamantor ke hast va dar kod neveshte shode namayesh dade mishavad:

echo '<pre>';

echo code...;

echo '</pre>';


//--------------------------

' s malekiyat '

echo ' The Bob\'s mobile ';  or 
echo " The Bob's mobile ";

//---------------------------

echo "the string is \"ABCD"\ " ;

//--------------------------

/* Enter in string (html) */

\n//Enter
\t//Tab
\###//with octal code you can use keyboard
\x##//Escape sequense

//--------------------------

$str = <<<MYSTR
	salam alan harchi inja biyad az ' gerefte
	ta in " khodeshoon daghighan echo mishan 
	be joze inter ke be <per> niayaz dare va 
	varriable ha ke agar $a biyad haselesh ro 
	echo mikone va bayad injoori biyad \$a agar 
	khodesh ro mikhaye;
MYSTR;

echo $str;

$str = <<<'MYSTR'
	hame chii mele ghabli vali agar $a
	biyad hamoon $a ro echo mikone
MYSTR;

echo $str;


//-----------------------------

/* variable  variable  */

$a = 10;
$b = 5; 
$c = 15;

$name = 'c';
echo $$name;//15

//-----------------------------
	

strto
















