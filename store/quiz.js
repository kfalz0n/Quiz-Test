
export default {
    namespaced: true,
    state: {
      questions: [
        {
          id: 1,
          question: 'Who won the Champions Leauge back in 2003?',
          answers: ['Milan', 'Juventus', 'Barcelona', 'Real Madrid'],
          correct: 'Milan',
          image: 'https://img.uefa.com/imgml/uefacom/ucl/fallback.jpg',
        },
        {
          id: 2,
          question: 'Which Formula One driver was nicknamed The Professor',
          answers: ['Ayrton Senna', 'Niki Lauda', 'Alain Prost', 'Emerson Fittipaldi'],
          correct: 'Alain Prost',
          image: 'https://ichef.bbci.co.uk/onesport/cps/480/cpsprodpb/6CB9/production/_103433872_f1concept.jpg',
        },
        {
          id: 3,
          question: 'Which nation hosted the FIFA World Cup in 2006?',
          answers: ['Brazil', 'South Africa', 'Germany', 'South Korea'],
          correct: 'Germany',
          image: 'https://1.bp.blogspot.com/-DVdCuuYWk3Y/U57S6molOmI/AAAAAAAAcEU/uVukzmb_6N4/s728/FIFA-World-Cup-2014.jpg',
        },
        {
          id: 4,
          question: 'Which year was the third Super Bowl held?',
          answers: ['1969', '1971', '1970', '1968'],
          correct: '1969',
          image: 'https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/Super_Bowl_XLIII_-_Thunderbirds_Flyover_-_Feb_1_2009_1.jpg?itok=_gcWsCML',
        },
        {
          id: 5,
          question: 'What is the full name of the footballer Cristiano Ronaldo?',
          answers: ['Cristiano Ronaldo los Santos Diego', 'Cristiano Armando Diego Ronaldo', 'Cristiano Luis Armando Ronaldo', 'Cristiano Ronaldo dos Santos Aveiro'],
          correct: 'Cristiano Ronaldo dos Santos Aveiro',
          image: 'https://www.backgroundimageshd.com/wp-content/uploads/2017/11/Black-Kit-Cristiano-Ronaldo-Wallpaper.jpg',
        },
      ],
    },
    getters: {
      getQuestions: state => state.questions,
    },
  };
  