
<?php 
use yii\helpers\Html ;
use yii\helpers\HtmlPurifier;
//use yii\web\View;
$artcl = $article['data'];

$formatter = \Yii::$app->formatter;
//$formatter->locale = 'fr-FR';
?>

<article class="artcl">
	<h2 class="w3-xxlarge w3-serif" ><?=  Html::encode($artcl['titre']) ?></h2>
	<hr>
		<span><?=  $formatter->asDate($artcl['date_art'], 'full') ?></span> | 
			<span class="fa fa-eye"></span> 
			<span id="nbrviews"></span>
	<hr>
	<?=  $formatter->asImage($artcl['file'],['class'=>'w3-round']) ?> 
	<div class="content">
		<p>
			<?= HtmlPurifier::process($artcl['contenu']) ?>
		</p>
	</div>
</article>

<?php

$id=$artcl['id_art'];

$script = <<< JS

  
  $.get("http://localhost/yii/advanced2/backend/web/index.php?r=article/count-article", { id: $id },'json').done(function( data ) {
		$("#nbrviews").fadeIn().html(data.info.count_views);
		});
JS;
$this->registerJs($script)

 ?>
