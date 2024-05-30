<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем данные из POST-запроса
    $id = $_POST['id'] ?? '';
    $names = $_POST['names'] ?? [];
    $guests = $_POST['guests'] ?? [];
    $transfer = $_POST['transfer'] ?? '';
    $drinks = $_POST['drinks'] ?? [];
    $otherDrink = $_POST['otherDrink'] ?? '';

    // Читаем текущие данные
    $file = 'responses.txt';
    $currentData = file_exists($file) ? file_get_contents($file) : '';
    $lines = explode("\n", $currentData);

    // Ищем и удаляем старые данные с тем же ID
    $newLines = [];
    $inBlock = false;

    foreach ($lines as $line) {
        if (strpos($line, "ID: $id") === 0) {
            $inBlock = true;
        } elseif (strpos($line, "ID: ") === 0) {
            $inBlock = false;
        }

        if (!$inBlock && $line !== '') {
            $newLines[] = $line;
        }
    }

    // Добавляем новые данные
    $newLines[] = "ID: $id";
    $newLines[] = "Names: " . implode(", ", $names);
    $newLines[] = "Guests: " . implode(", ", $guests);
    $newLines[] = "Transfer: " . $transfer;
    $newLines[] = "Drinks: " . implode(", ", $drinks);
    if (!empty($otherDrink)) {
        $newLines[] = "Other Drink: " . $otherDrink;
    }
    $newLines[] = "=======================";

    // Сохраняем обновленные данные
    file_put_contents($file, implode("\n", $newLines) . "\n");

    echo json_encode(['status' => 'success']);
    exit;
} else {
    echo json_encode(['status' => 'invalid_method']);
}
?>

