var homeBot = BotUI('home-bot');


homeBot.message.add({
  loading: true,
  delay: 1000,
  content: 'Hello, I\'m Dexter.'
}).then(function() {
  return homeBot.message.add({
    loading: true,
    delay: 1500,
    content: 'Art Director with over 10 years creative experience. I\'m based in New York City and love crafting digital products for future thinking brands.'
  });
}).then(function() {
  return homeBot.message.add({
    loading: true,
    delay: 1500,
    content: "Would you like to hire me?"
  });
}).then(function() {
  return homeBot.action.button({
    delay: 1500,
    action: [{
      text: "Sure, let\'s chat!",
      value: 'sure'
    }, {
      text: 'Skip',
      value: 'skip'
    }]
  });
}).then(function(res) {
  ga_record('btn_click', res.value);
  if (res.value == 'sure') {
    introduciton();
  }
  if (res.value == 'skip') {
    contact();
  }
});

var introduciton = function() {
  homeBot.message.add({
    loading: true,
    delay: 1000,
    content: "Awesome! What's your name?"
  }).then(function() {
    return homeBot.action.text({
      delay: 800,
      action: {
        value: '',
        placeholder: 'Enter your name'
      }
    });
  }).then(function(res) {
    return homeBot.message.bot({
      loading: true,
      delay: 1000,
      content: 'Nice to meet you, ' + res.value + '!'
    });

  }).then(function(res) {
    return homeBot.message.bot({
      loading: true,
      delay: 1400,
      content: "I\'m here to answer frequently asked questions. Got any?"
    });
  }).then(function() {
    return homeBot.action.select({
      action: {
        placeholder: "* Please select a question.",
        // Selected value or selected object. Example: {value: "TR", text : "Türkçe" }
        searchselect: true, // Default: true, false for standart dropdown
        label: 'text', // dropdown label variable
        options: [

          {
            value: "My love for design",
            text: "Why do you love design?"
          },


        ],
        button: {
          icon: 'check',
          label: 'OK'
        }
      }
    }).then(function(res) {
      return homeBot.message.bot({
        // will be called when a button is clicked.
        loading: true,
        delay: 2500,
        content: "" + res.value + " goes beyond any surface-level emotional fulfillment creatives get through artistic expression. But rather design to me, is about creating systems for better living; for making the routine of our everyday lives easier to navigate and understand, whether that be products, theories or ideologies.",
      });
    });

  }).then(function(res) {
    return homeBot.message.bot({
      loading: true,
      delay: 2000,
      content: "Having the priviledge to solve these unqiue problems day in and day out... is an absolute dream!"
    });
  }).then(function() {
    return homeBot.action.button({
      loading: true,
      delay: 1500,
      action: [{
          text: 'Why hire you? ',
          value: 'sure'
        },
        {
          text: 'A Brief Bio',
          value: 'bio'
        },
        {
          text: 'Favorite Campaign',
          value: 'featured'
        },
        {
          text: 'Tech Skills',
          value: 'skills'
        }
      ]
    });
  }).then(function(res) {
    ga_record('btn_click', res.value);
    if (res.value == 'sure') {
      result();
    }
    if (res.value == 'bio') {
      bio();
    }
    if (res.value == 'featured') {
      project();
    }
    if (res.value == 'skills') {
      skills();
    }
  }).then(end);
};


var result = function() {
  ga_record('message', 'result');
  homeBot.message.add({
    loading: true,
    delay: 2000,
    type: 'html', // this is 'text' by default
    content: 'I\'m a thinker and maker. I live for internet culture, and enjoy building modern brands.',
  }).then(function(res) {
    return homeBot.message.bot({
      loading: true,
      delay: 3000,
      content: "Proven understanding of user experience and digital marketing to design beautiful & intuitive experiences."
    });
  }).then(function(res) {
    return homeBot.message.bot({
      loading: true,
      delay: 2200,
      type: 'html', // this is 'text' by default
      content: 'Self-directed, well-spoken and dilligent. I bring to the table strong design sensibilities, inquisitiveness & perceptiveness.',
    });
  }).then(function() {
    return homeBot.action.button({
      delay: 1500,
      action: [{
        text: "Favorite Campaign",
        value: 'project'
      }, {
        text: 'Tech Skills',
        value: 'skills'
      }, {
        text: 'A Brief Bio',
        value: 'bio'
      }, {
        text: 'Contact Info',
        value: 'contact'
      }]
    });
  }).then(function(res) {
    ga_record('btn_click', res.value);
    if (res.value == 'project') {
      project();
    }
    if (res.value == 'skills') {
      skills();
    }
    if (res.value == 'bio') {
      bio();
    }
    if (res.value == 'contact') {
      contact();
    }
  });
};



var skills = function() {
  ga_record('message', 'result');
  homeBot.message.add({
    loading: true,
    delay: 2000,
    type: 'html', // this is 'text' by default
    content: 'I\'ve spent the last 12 years building up an intriuging domain of competence and expertise in the following areas.',
  }).then(function() {
    return homeBot.action.button({
      delay: 1500,
      action: [{
        text: "Art Direction",
        value: 'art'
      }, {
        text: 'Brand Identity',
        value: 'branding'
      }, {
        text: 'Graphic Design',
        value: 'graphics'
      }, {
        text: 'UI/UX Design',
        value: 'digital'
      }, {
        text: 'Advertising',
        value: 'advertising'
      }, {
        text: 'Creative Coding',
        value: 'code'
      }]
    });
  }).then(function(res) {
    ga_record('btn_click', res.value);
    if (res.value == 'project') {
      project();
    }
    if (res.value == 'skills') {
      skills();
    }
    if (res.value == 'bio') {
      bio();
    }
    if (res.value == 'contact') {
      contact();
    }
  });
};



var bio = function() {
  ga_record('message', 'result');
  homeBot.message.add({
    delay: 2500,
    loading: true,
    type: 'html', // this is 'text' by default
    content: 'I grew up in the twin island Republic of Trinidad and Tobago. As a child I had a passion for reading & drawing comics. My dream job was to become an Animator at PIXAR Studios.',
  }).then(function(res) {
    return homeBot.message.bot({
      loading: true,
      delay: 3200,
      content: "By the end of high school, I discovered Adobe CS & began experimenting with Photoshop."
    }).then(function(res) {
      return homeBot.message.bot({
        loading: true,
        delay: 3200,
        type: 'html',
        content: 'In 2007 I got my first junior design role, and was later employed at Saatchi & Saatchi and Nestlé, before migrating to New York City in 2017.'
      });

    }).then(function(res) {
      return homeBot.message.bot({
        loading: true,
        delay: 3000,
        content: "I\'ve had the priviledge of working with amazing, transnational brands and would love to bring my expertise to your team! "
      });

    });
  }).then(function() {
    return homeBot.action.button({
      delay: 1500,
      action: [{
        text: "Favorite Campaign",
        value: 'project'
      }, {
        text: 'Tech Skills',
        value: 'skills'
      }, {
        text: 'Why hire you?',
        value: 'sure'
      }, {
        text: 'Contact Info',
        value: 'contact'
      }]
    });
  }).then(function(res) {
    ga_record('btn_click', res.value);
    if (res.value == 'project') {
      project();
    }
    if (res.value == 'skills') {
      skills();
    }
    if (res.value == 'sure') {
      result();
    }
    if (res.value == 'contact') {
      contact();
    }
  });
};


var contact = function() {
  ga_record('message', 'end');
  homeBot.message.add({
    loading: true,
    type: 'html',
    delay: 5000,
    content: 'I\'d love to forward a copy of my Porfolio & CV to discuss further:<br><a href="sms:+17186873111?" class="chat-link">SMS Request</a> or <a href="mailto: hire@dextermjacobs.com?Subject=Job%20Opportunity" target="_top" class="chat-link">Mail Request</a>',
  }).then(function(res) {
    return homeBot.message.bot({
      loading: true,
      delay: 3000,
      content: "For recuiters seeking talent please call +1 (718) 687-3111",
    }).then(function(res) {
      return homeBot.message.bot({
        loading: true,
        delay: 3000,
        content: "Hope to work with you soon!"
      });

    });
  });
};

var project = function() {
  ga_record('message', 'end');
  homeBot.message.add({
    loading: true,
    type: 'html',
    delay: 5000,
    content: 'My favourite project is',
  });
};




var ga_record = function(type, action) {
  if (ga) {
    ga('send', {
      hitType: 'event',
      eventCategory: type,
      eventAction: action
    });
  }
}
