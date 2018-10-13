<template>
   <div id="score-page">
       <span class="header-1">Highscore List</span>

        <div class="score-list" v-if="scores.length > 0" v-for="(score, index) in scores" :key="index">
            <span>{{++index}}</span>. <span>{{score.name}} - {{score.score}}%</span>,
            <span>Correct Answers: {{score.correctAnswers}} / 5</span>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'highscore',
    computed: {
        scores() {
            return _.orderBy(this.$store.getters['highscore/getScores'], 'score', 'desc');
        }
    },
};
</script>


<style lang="less" scoped>
#score-page{
    margin-top:15px;

    .header-1 {
        font-size:25px;
    }

    .score-list {
        margin-top:20px;
        font-size:18px;

        span {
            color:navy;
            padding-top:15px;
            padding-bottom:15px;
        }
    }
    
}
</style>