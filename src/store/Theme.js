import axios from 'axios'
const state = {
    theme_data:[],
  }
  
  // getters
  const getters = {
    themeData: (state) => {
      return state.theme_data;
    },
}
  
  // actions
  const actions = {
    getThemeData:(context)=>{
        axios.get('static/theme.json').then((res)=>{
            return res.data.data;
        }).then((data)=>{
            context.commit('setThemeData',data);

        })
    }
    
  
    
  }
  
  // mutations
  const mutations = {
      setThemeData:(state,data)=>{
        var temp=[];
        for(var i=0;i<data.length;i++){
            console.log(data[i])
            let t={
                value:data[i].percent,
                name:data[i].theme
            }
            temp.push(t);
        }
        
        state.theme_data=temp;
        
      }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }