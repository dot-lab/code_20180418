jQuery(document).ready(function(){

	$quiz_start = $('.quiz_start');
	$quiz_1 = $('.quiz_1');
	$quiz_2 = $('.quiz_2');
	$quiz_3 = $('.quiz_3');
	$quiz_4 = $('.quiz_4');
	$quiz_5 = $('.quiz_5');
	$quiz_end = $('.quiz_end');

	$correct_cnt = 0;

	// ページ遷移
	function moveNext($self,$target) {
		$self.fadeOut();
		$target.delay(500).fadeIn();
	};

	// 正解アニメ
	function seikaiAnim() {
		$('.correct').fadeIn();
		$('.correct').fadeOut();
	}

	function zannenAnim() {
		$('.incorrect').fadeIn();
		$('.incorrect').fadeOut();
	}
	function judgeAnswer($btn) {
		if ($btn.data('answer') == 'correct') {
			seikaiAnim();
			// 正解数カウントを1増加
			$correct_cnt++;
			return true;
		} else {
			zannenAnim();
			return false;
		};
	};

	// スタート画面から１問目への遷移
	$('.quiz_start .start_btn').click(function() {
		moveNext($quiz_start,$quiz_1);
	});

	// １問目正誤判定
	$('.quiz_1 .quiz_btn').click(function() {
		if ( judgeAnswer( $(this) ) ) {
			moveNext($quiz_1,$quiz_2);
		} else {
			moveNext($quiz_1,$quiz_2);
		};
	});

	// ２問目正誤判定
	$('.quiz_2 .quiz_btn').click(function() {
		if( judgeAnswer( $(this) ) ) {
			moveNext($quiz_2,$quiz_3);
		} else {
			moveNext($quiz_2,$quiz_3);
		}
	});

	// ３問目正誤判定
	$('.quiz_3 .quiz_btn').click(function() {
		if( judgeAnswer( $(this) ) ) {
			moveNext($quiz_3,$quiz_4);
		} else {
			moveNext($quiz_3,$quiz_4);
		}
	});

	// ４問目正誤判定
	$('.quiz_4 .quiz_btn').click(function() {
		if( judgeAnswer( $(this) ) ) {
			moveNext($quiz_4,$quiz_5);
		} else {
			moveNext($quiz_4,$quiz_5);
		}
	});

	// ５問目正誤判定
	$('.quiz_5 .quiz_btn').click(function() {
		if( judgeAnswer( $(this) ) ) {
			kekka();
			moveNext($quiz_5,$quiz_end);
		} else {
			kekka();
			moveNext($quiz_5,$quiz_end);
		}
	});

	// 結果発表
	function kekka() {
		$correct_num = './image/numbers/0.png';
		switch($correct_cnt) {
		case 1 :
			$correct_num = './image/numbers/1_red.png';
			break;
		case 2 :
			$correct_num = './image/numbers/2_red.png';
			break;
		case 3 :
			$correct_num = './image/numbers/3_red.png';
			break;
		case 4 :
			$correct_num = './image/numbers/4_red.png';
			break;
		case 5 :
			$correct_num = './image/numbers/5_red.png';
			break;
		default :
			$correct_num = './image/numbers/0.png';
			break;
		};
		$('.quiz_end .correct_cnt').attr('src',$correct_num);
	}

	// リトライ
	$('.quiz_end .retry_btn').click(function() {
		$correct_cnt = 0;
		moveNext($quiz_end,$quiz_start);
	});

	// やめる
	$('.quiz_end .back_btn').click(function() {
		window.open('about:blank','_self').close();
	});

	// やめる（スタート画面）
	$('.quiz_start .back_btn').click(function() {
		window.open('about:blank','_self').close();
	})
});