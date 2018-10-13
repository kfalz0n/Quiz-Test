<template>
   <div id="quiz-page">

       <span class="header-1">Quiz - </span>
       <span class="header-2">Test your knowledge!</span>

       <v-form v-model="valid">
            <div class="question" v-for="(q, index) in questions" :key="index">
            
                <div class="question-title">
                    <span class="question-number">{{q.id}}</span> - {{q.question}}
                </div>

                <span class="question-answer-header">Chose Your Answer:</span>

                <v-parallax height="200" :src="q.image">
                <div class="question-answers">
                    <label v-for="answer in q.answers" :key="answer">
                        <div>
                            <input type="radio" v-model="userResponse[index]" :name="q.id" :value="answer">
                            {{ answer }}
                        </div>
                    </label>
                </div>
               </v-parallax> 
            </div>

            <div class="question-title">
                <span>Last step before completing your quiz!</span>
            </div>

            <v-text-field v-model="firstName" :rules="nameRules" :counter="15" label="First Name" required></v-text-field>
            <v-text-field v-model="lastName" :rules="nameRules" :counter="15" label="Last Name" required></v-text-field>

            <v-btn color="success" :disabled="!valid" @click="submitQuiz">Submit</v-btn>
        </v-form>

        <v-dialog v-model="dialog" max-width="400">
        <v-card>
            <v-card-title class="headline">Quiz Result!</v-card-title>

            <v-card-text>
                Hey {{quizUserResult.name}}, you have scored {{quizUserResult.score}}% in your quiz! You got {{quizUserResult.correctAnswers}} of 5 correct
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" flat="flat" @click="dialog = false">
                Close
            </v-btn>

            <v-btn color="green darken-1" flat="flat" @click="$nuxt._router.push('/highscore')">
                Go to Highscore List
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    </div>
</template>

<script>

export default {
    name: 'quiz',
    data: () => ({
      dialog: false,
      valid: false,
      firstName: '',
      lastName: '',
      nameRules: [
        v => !!v || 'First & Last Name is required',
        v => (v && v.length <= 15) || 'First & Last Name must be less than 15 characters'
      ],
      userResponse: Array(5).fill(false),
      quizResult: {
          name: '',
          correctAnswers: 0,
          score:0
      }
    }),
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    methods: {
        submitQuiz: function() {
            this.dialog = true;

            this.calculateScore();
            this.clear();
            
            this.$store.dispatch('highscore/addScore', this.quizResult);
        },
        calculateScore() {
            let questions = this.questions;
            
            for (var i = 0, len = questions.length; i < len; i++) {
                var question = questions[i];

                if (this.userResponse[i] !== false && this.userResponse[i] == question.correct)
                    this.quizResult.correctAnswers +=1;
            }

            this.quizResult.name = this.firstName;
            this.quizResult.score = (this.quizResult.correctAnswers * 10) * 2;
        },
        clear() {
            this.userResponse = Array(5).fill(false);
            this.firstName = '';
            this.lastName = '';
        }
    },
    computed: {
        questions() {
            return this.$store.getters['quiz/getQuestions'];
        },
        quizUserResult() {
            return this.quizResult;
        }
    },
};
</script>

<style lang="less" scoped>
#quiz-page{
    margin-top:15px;

    .header-1 {
        font-size:25px;
    }

    .header-2 {
        font-size:20px; 
        font-style: italic
    }

    .question {
        padding:30px;
        position:relative;
        display:block;

        &-title
        {
            font-size:17px;
            color:navy;
        }

        &-number{
            font-size:20px;
        }

        &-answer-header
        {
            margin-top:10px;
            margin-bottom:5px;
            display:block;
            color:darkblue;
            font-size:14px;
            font-style:italic;
        }

        &-answers
        {
            margin-top:5px;
        }

        label {
            padding:10px;
            font-size:16px;
        }
    }

    img {
        width:350px;
        height:200px;
    }
}
</style>