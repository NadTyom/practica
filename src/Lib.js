export const searchBySkills= (arr,techs)=>{
    // veradardznuma filtrvac dasatunerin es functian
    return arr.filter(elm => {
        return techs.every(item => elm.skills.includes(item))
    })

}