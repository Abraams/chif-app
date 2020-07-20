<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  	  					// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'логин'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'пароль'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('логин'); // от кого будет уходить письмо?
$mail->addAddress('адресат');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                    // Set email format to HTML

$subject = $_POST['msg_subject'];
$total = $_POST['form_total'];
$street = 'ул.'.$_POST['user_street'].', ';
$dom = $_POST['user_dom'].', ';
$room = 'кв.'.$_POST['user_room'];
$tel = $_POST['user_tel'];
$pay = $_POST['user_pay'];
$orderList = $_POST['orderList'];
$orderList = explode("|", $orderList);



if ($_POST['user_corp']) {
	$corp = $_POST['user_corp'].', ';
}
if ($_POST['user_porch']) {
	$porch = 'Подъезд: '.$_POST['user_porch'];
}
if ($_POST['user_floor']) {
	$floor = ', этаж: '.$_POST['user_floor'];
}

$message = '';

if ($_POST['user_name']) {
	$name = $_POST['user_name'];
	$message .='<p>Имя клиента: '.$name.'</p>';
}
$message .='<p>Номер телефона: '.$tel.'</p>';
// $message .='<p>Способ оплаты: '.$pay.'</p>';

$message .= '<table>';
$message .='<tr style="background-color: #f8f8f8">
				<td colspan="1" valign="center" 	style="padding: 15px; border: #e9e9e9 1px solid;">Название</td>
				<td colspan="1" align="center" valign="center" 	style="padding: 15px; border: #e9e9e9 1px solid;">Количество</td>
				<td colspan="1" align="center" valign="center" 	style="padding: 15px; border: #e9e9e9 1px solid;">Цена</td>
			</td>';

for ($i=0; $i < count($orderList); $i++) {
	$temp = explode(",", $orderList[$i]);

	$temp[1] = $temp[1]. ' дней';
	$temp[2] = $temp[2]. '₽ в день';

	$message .='<tr style="background-color: #fff">
				  <td valign="center" style="padding: 15px; border: #e9e9e9 1px solid;">' .$temp[0]. '</td>';
	$message .='<td align="center" valign="center" style="padding: 15px; border: #e9e9e9 1px solid;">' .$temp[1]. '</td>';
	$message .='<td align="center" valign="center" style="padding: 15px; border: #e9e9e9 1px solid;">' .$temp[2]. '</td></td>';
};

$message .='<tr style="background-color: #f8f8f8">
			  <td colspan="1"  valign="center" style="padding: 15px; border: #e9e9e9 1px solid;">К оплате</td>
			  <td colspan="2" align="center" valign="center" style="padding: 15px; border: #e9e9e9 1px solid;">' .$total.'</td>
			</td>';
$message .= '</table>';



$message .='<p>Адрес: '.$street.''.$dom.''.$corp.''.$room.'</p>';
$message .='<p>'.$porch.'' .$floor. '</p>';

$mail->Subject = $subject. ' '.$total;
$mail->Body    = $message;
$mail->AltBody = '';


if(!$mail->send()) {
    echo 'Error';
} else {
    return true;
}
?>