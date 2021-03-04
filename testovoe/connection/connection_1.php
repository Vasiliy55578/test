<?php

if ( (isset($_POST['id'])) AND ($_POST['id'] != "") ) {
  $value = $_POST['id'];

// Параметры соединения с базой данных
define('DB_SERVER', 'localhost');       // IP адрес сервера БД или если локальный ПК localhost
define('DB_USERNAME', 'root');         // Имя пользователя
define('DB_PASSWORD', 'root'); // Пароль пользователя
define('DB_DATABASE', 'task_tz');        // Имя базы данных

// Загружаем соединение с базой данных
include '../database.class.php';

// Соединение с базой данных
$link = DataBase::Connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

// Выполняет запрос к базе данных
$result = mysqli_query($link, "SELECT * FROM `user` WHERE `email` LIKE '$value%' ");

// Обрабатывает ряд результата запроса и возвращает ассоциативный массив
while( $row = mysqli_fetch_assoc($result) ){
$id[] = $row['id'];
$email[] = $row['email'];
}

if ( isset($id)) { // если есть то выполняем
       

    for( $i = 0; $i < count($id); $i++ ) { 
  $sql = mysqli_query($link, "SELECT * FROM `user_info` WHERE `user_id` = $id[$i] ");
  while( $row = mysqli_fetch_assoc($sql) ){
      echo "<tr><td>". $email[$i] . " - </td><td>" .$row['name'] ."</td><td>". $row['sname']. "</td><td> [id = " . $row['user_id'] . "] </td>";
      echo "</tr>";
          }
    }

      }
      else {
          echo '0';

      }

// Закрываем соединение с базой данных
DataBase::Close();

}

?>