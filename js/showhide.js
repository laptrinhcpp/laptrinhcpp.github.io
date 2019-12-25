function showHide(answerID) {
    $(document).ready(function() {
        if ($(answerID).css('display') == 'none') {
            $(answerID).show( "slow" );
            $(answerID).css('display') = 'block';
        }
        else {
            $(answerID).hide( "slow" );
            $(answerID).css('display') = 'none';
        }
    });
}
