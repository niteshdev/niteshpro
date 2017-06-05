<?php
 define('HOST','localhost');
 define('USERNAME', 'root');
 define('PASSWORD','123');
 define('DB','nitesh');
 
 $con = mysqli_connect(HOST,USERNAME,PASSWORD,DB);
 
 $sql = mysqli_query($con,"SELECT * FROM employee ORDER BY id DESC LIMIT 10");
while($row = mysqli_fetch_assoc($sql))
{
  $json[]=array('id'=>$row['id'],'firstname'=>$row['firstname'],'lastname'=>$row['lastname'],'email'=>$row['email'],'age'=>$row['age']);
}
$a= json_encode($json);
echo $a;
?>
