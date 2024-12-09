import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import logo from './images/BCI LOGO ENG FULL.jpg';
import smalllogo from './images/BCI logo image.png';
import './App.css';

let data=[
  {
    ar:{question:'متى تم اكتشاف تفاعل البولي يوريثين (PU)؟',
      options:[
        {answer:'أ. 1937', isCorrect:true},
        {answer:'ب. 1944', isCorrect:false},
        {answer:'ج. 1961', isCorrect:false},
        {answer:'د. 1971', isCorrect:false}
      ],
    },
    en:{question:'When was the polyurethane (PU)  reaction discovered ?',
      options:[
        {answer:'a.1937', isCorrect:true},
        {answer:'b.1944', isCorrect:false},
        {answer:'c.1961', isCorrect:false},
        {answer:'d. 1971', isCorrect:false}
      ],
    }
  },
  {
    ar:{question:'من هو مخترع تفاعل البولي يوريثين؟',
      options:[
        {answer:'أ- أينشتاين', isCorrect:false},
        {answer:'ب- نيوتن', isCorrect:false},
        {answer:'ج- سيلفستر ستالون', isCorrect:false},
        {answer:'د- أوتو باير', isCorrect:true}
      ],
    },
    en:{question:'Who invented the polyurethane reaction?',
      options:[
        {answer:'a-Einstein ', isCorrect:false},
        {answer:'b.Newton', isCorrect:false},
        {answer:'c.Silvester Stalone', isCorrect:false},
        {answer:'d.Otto Bayer ', isCorrect:true}
      ],
    }
  },
  {
    ar:{question:'أي دولة اخترعت رغوة البولي يوريثان؟ ',
      options:[
        {answer:'أ. فرنسا', isCorrect:false},
        {answer:'ب. ألمانيا', isCorrect:true},
        {answer:'ج. روسيا', isCorrect:false},
        {answer:'د. اليابان', isCorrect:false}
      ],
    },
    en:{question:'Which country invented the polyurethane foam ?',
      options:[
        {answer:'a.France ', isCorrect:false},
        {answer:'b.Germany', isCorrect:true},
        {answer:'c.Russia ', isCorrect:false},
        {answer:'d.Japan', isCorrect:false}
      ],
    }
  },
  {
    ar:{question:'متى تم استخدام رغوة البولي يوريثين لأول مرة في المباني والإنشاءات؟ ',
      options:[
        {answer:'أ. 1932 ', isCorrect:false},
        {answer:'ب. 1940 ', isCorrect:false},
        {answer:'ج. 1946 ', isCorrect:false},
        {answer:'د. 1942', isCorrect:true}
      ],
    },
    en:{question:'When was the PU foam  first used in buildings and construction?',
      options:[
        {answer:'a.1932', isCorrect:false},
        {answer:'b.1940', isCorrect:false},
        {answer:'c.1946', isCorrect:false},
        {answer:'d.1942', isCorrect:true}
      ],
    }
  },
  {
    ar:{question:'متى تأسست شركة بي سي آي العربية في المملكة العربية السعودية؟',
      options:[
        {answer:'أ.2022', isCorrect:true},
        {answer:'ب.2021', isCorrect:false},
        {answer:'ج.2010', isCorrect:false},
        {answer:'د.2023', isCorrect:false}
      ],
    },
    en:{question:'When BCI Arabia was established in KSA ?',
      options:[
        {answer:'a.2022', isCorrect:true},
        {answer:'b.2021', isCorrect:false},
        {answer:'c.2010', isCorrect:false},
        {answer:'d.2023', isCorrect:false}
      ],
    }
  },
  {
    ar:{question:'ما هي القطاعات التي تنتجها شركة BCI في المملكة العربية السعودية؟',
      options:[
        {answer:'أ- الرغوة الصلبة', isCorrect:true},
        {answer:'ب. الرغوة المرنة', isCorrect:true},
        {answer:'ج. المواد اللاصقة المرنة للتغليف', isCorrect:true},
        {answer:'د. الطلاءات، بوليستر بوليول والرغوة المرنة', isCorrect:true}
      ],
    },
    en:{question:'What segments does BCI produce in KSA?',
      options:[
        {answer:'a-Rigid foam', isCorrect:true},
        {answer:'b.Elastomeric foam', isCorrect:true},
        {answer:'c.Flexible packaging adhesives ', isCorrect:true},
        {answer:'d.Coatings, Polyester Polyol & Flexible foam ', isCorrect:true}
      ],
    }
  },
  {
    ar:{question:'ما هي الطاقة الإنتاجية السنوية لشركة بي سي آي العربية؟',
      options:[
        {answer:'أ. 10,000 طن متري', isCorrect:false},
        {answer:'ب. 17,000 طن متري', isCorrect:false},
        {answer:'ج. 40,000 طن متري', isCorrect:true},
        {answer:'د. 60,000 طن متري', isCorrect:false}
      ],
    },
    en:{question:`What is BCI Arabia's annual production capacity?`,
      options:[
        {answer:'a.10,000 Mt', isCorrect:false},
        {answer:'b.17,000 Mt', isCorrect:false},
        {answer:'c.40,000 mt', isCorrect:true},
        {answer:'d.60,000 Mt', isCorrect:false}
      ],
    }
  },
  {
    ar:{question:'ما نوع التكنولوجيا المستخدمة في الإنتاج في BCI Arabia؟',
      options:[
        {answer:'أ. ألماني', isCorrect:false},
        {answer:'ب. ياباني', isCorrect:false},
        {answer:'ج. ألماني وأمريكية', isCorrect:true},
        {answer:'د. إسبانية', isCorrect:false}
      ],
    },
    en:{question:'What type of technology is applied to production at BCI Arabia?',
      options:[
        {answer:'a.German', isCorrect:false},
        {answer:'b.Japanese', isCorrect:false},
        {answer:'c.German and American', isCorrect:true},
        {answer:'d.Spanish', isCorrect:false}
      ],
    }
  },
  {
    ar:{question:'ما هي عملية التصنيع المتبعة في شركة بي سي آي العربية؟',
      options:[
        {answer:'أ. يدوي', isCorrect:false},
        {answer:'ب. شبه آلي', isCorrect:false},
        {answer:'ج. آلي ورقمي', isCorrect:true},
        {answer:'د. لا يوجد', isCorrect:false}
      ],
    },
    en:{question:'What is the manufacturing process followed at BCI Arabia?',
      options:[
        {answer:'a.Manual ', isCorrect:false},
        {answer:'b.Semi-Automated ', isCorrect:false},
        {answer:'c.Automated and digitised ', isCorrect:true},
        {answer:'d.None', isCorrect:false}
      ],
    }
  },
  {
    ar:{question:'هل منتجات BCI صديقة للبيئة ومستدامة؟',
      options:[
        {answer:'أ. في طور التصنيع', isCorrect:false},
        {answer:'ب. صديقة للبيئة', isCorrect:false},
        {answer:'ج. مستدامة', isCorrect:false},
        {answer:'د. صديقة للبيئة ومستدامة', isCorrect:true}
      ],
    },
    en:{question:`Are BCI's products eco-friendly and sustainable ? `,
      options:[
        {answer:'a.In process', isCorrect:false},
        {answer:'b.Eco-Friendly ', isCorrect:false},
        {answer:'c.Sustainable ', isCorrect:false},
        {answer:'d.Eco-Friendly and Sustainable ', isCorrect:true}
      ],
    }
  },
  {
    ar:{question:'ماذا يمثل شعار BCI؟',
      options:[
        {answer:'أ. السلحفاة', isCorrect:false},
        {answer:'ب. الرمز الكيميائي', isCorrect:false},
        {answer:'ج. الشمس', isCorrect:false},
        {answer:'د. السلحفاة والرمز الكيميائي', isCorrect:true}
      ],
    },
    en:{question:'What does the BCI Logo represent?',
      options:[
        {answer:'a.Turtle ', isCorrect:false},
        {answer:'b.Chemical Symbol', isCorrect:false},
        {answer:'c.Sun', isCorrect:false},
        {answer:'d.Turtle and Chemical Symbol', isCorrect:true}
      ],
    }
  },
]

function App() {
  const [index,setIndex] = useState(0);
  const [selectedOptions,setSelectedOptions]=useState([])
  const [selectedCorrectAnswers,setSelectedCorrectAnswers]=useState([])
  const [winner,setWinner]=useState(false)

  useEffect(()=>{
    if(winner){
      setTimeout(() => {
        setWinner(false)
        setIndex(0)
        setSelectedOptions([])
        setSelectedCorrectAnswers([])
      },[5000])
    }
  },[winner])

  const renderQuestion=useCallback(()=>{
    let allCorrectAnswers=[]

    data[index].ar.options.forEach(element => {
      if(element.isCorrect){allCorrectAnswers.push(element.answer)}
    });
    
    const select=(item,idx)=>{
      
      if(selectedOptions.includes(idx)){return}

      if(item.isCorrect){

        setSelectedOptions([...selectedOptions,idx])
        setSelectedCorrectAnswers([...selectedCorrectAnswers,idx])

        if(index==data.length-1){
          setWinner(true)
          return 
        }

        if(selectedCorrectAnswers.length+1===allCorrectAnswers.length)
          setTimeout(() => {
            setIndex(index+1)
            setSelectedOptions([])
            setSelectedCorrectAnswers([])
          }, 500);

      }else{
        setSelectedOptions([...selectedOptions,idx])
      }
    }

    return (
        <div className="test-area">
          <div className={classNames({ 'text-box': true,'question': true})}>
            <div className='rtl'>{data[index].ar.question}</div>
            <div className='divider' />
            <div>{data[index].en.question}</div>
          </div>
          <div className='options'>{data[index].ar.options.map((item,idx)=>
            <div onClick={()=>select(item,idx)} className={classNames({ 'text-box': true,'correct': item.isCorrect && selectedOptions.includes(idx),'wrong': !item.isCorrect && selectedOptions.includes(idx)})}>
              <div className='rtl'>{item.answer}</div>
              <div className='divider' />
              <div>{data[index].en.options[idx].answer}</div>
            </div>)}
          </div>
        </div>
    )
  },[selectedCorrectAnswers,selectedOptions])

  if(winner)
    return (
      <div className='winner'>
        <img src={smalllogo} alt='win' />
        <div className='text'>
          <div>
          Congratulations, you are a PU Champion!			
          </div>
        </div>
        <img src={smalllogo} alt='win' />
      </div>)
  return (
    <div className="container">
      <img src={logo} className="logo" alt="logo" />
      {renderQuestion()}
    </div>
  );
}

export default App;
