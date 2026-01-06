<?php
session_start();

// ПРОВЕРКА: Если у пользователя нет "пропуска", выгоняем на вход
if (!isset($_SESSION['is_admin']) || $_SESSION['is_admin'] !== true) {
    header("Location: login.php");
    exit;
}

// Логика выхода (Logout)
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Панель управления</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9; }
        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #ddd; padding-bottom: 15px; }
        .btn-logout { text-decoration: none; color: red; border: 1px solid red; padding: 5px 15px; border-radius: 5px; }
        .card { background: white; padding: 20px; margin-top: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        h3 { margin-top: 0; }
    </style>
</head>
<body>

    <div class="header">
        <h1>Админ-панель</h1>
        <a href="?logout=1" class="btn-logout">Выйти</a>
    </div>

    <div class="card">
        <h3>👋 Добро пожаловать!</h3>
        <p>Вы находитесь в защищенной зоне управления сайтом.</p>
        <p>Здесь в будущем мы подключим редактирование:</p>
        <ul>
            <li>Услуг <b>эвакуатора</b> (Фото: images/gallery-1.jpg...)</li>
            <li>Услуг <b>манипулятора</b> (Фото: images/manipulator-hero.jpg...)</li>
        </ul>
        <a href="/" target="_blank">Перейти на главный сайт →</a>
    </div>

</body>
</html>
