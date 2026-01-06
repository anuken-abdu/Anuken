<?php
session_start();

// --- НАСТРОЙКИ ВХОДА (Поменяйте это на свои данные!) ---
$admin_login = "admin";
$admin_pass  = "12345"; 
// -------------------------------------------------------

$error = "";

// Если нажали кнопку "Войти"
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST['login'];
    $pass = $_POST['password'];

    // Проверяем логин и пароль
    if ($login === $admin_login && $pass === $admin_pass) {
        $_SESSION['is_admin'] = true; // Выдаем "пропуск"
        header("Location: index.php"); // Перенаправляем в панель
        exit;
    } else {
        $error = "Неверный логин или пароль!";
    }
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Вход в админку</title>
    <style>
        body {
            background-color: #f0f2f5;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-box {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            width: 300px;
            text-align: center;
        }
        h2 { margin-top: 0; color: #333; }
        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box; /* Чтобы padding не ломал ширину */
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #1877f2; /* Синий цвет как на скрине */
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
        }
        button:hover { background-color: #166fe5; }
        .error { color: red; font-size: 14px; margin-bottom: 10px; }
    </style>
</head>
<body>

<div class="login-box">
    <h2>Вход</h2>
    <?php if($error) { echo "<div class='error'>$error</div>"; } ?>
    
    <form method="POST">
        <input type="text" name="login" placeholder="Логин" required>
        <input type="password" name="password" placeholder="Пароль" required>
        <div style="text-align: left; font-size: 13px; margin-bottom: 15px; color: #666;">
            <input type="checkbox" style="width: auto;" checked> Сохранить вход
        </div>
        <button type="submit">Войти</button>
    </form>
</div>

</body>
</html>
