import React from 'react';
import styled,{css,keyframes,ThemeProvider} from 'styled-components'

export default function ComponentesRenderizados(){
    let mainColor='#db7093',
    mainAlphaColor80='blue'
    const setTransitionTime=(time)=>`all ${time} ease-in-out`
    const fadeIn=keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
    `
    const  MyH3 = styled.h3`
    padding:2rem;
    text-align:center;
    color:${(props)=>props.color};
    color:${({color})=>color || 'black'};
    background-color:${mainColor};
    transition:${setTransitionTime('1s')};
    animation:${fadeIn} 2s ease-in-out;
    ${(props)=>{props.isButton && css`
    /* margin:auto;
    max-width:50px ;
    border-radius: 0.25rem;
    cursor:pointer; */
    
    `}}
    &:hover{
        background-color:${mainAlphaColor80}
    }

    `
        const Box = styled.div`
        padding:1rem;
        margin:1rem;
        color:${({theme})=>theme.color};
        background-color:${({theme})=>theme.color}
        `
        const BorderRounder=styled(Box)`
        border-radius: 1rem;
        `
        const light={
            color:'#222',
            bgColor:'#ddd'

        }
        const dark={
            color:'#DDD',
            bgColor:'#222'

        }
    return(
        <>
        <h2>componentes estelizados</h2>
        <MyH3 color={'golden'}>Hola soy un h3 con styled-components</MyH3>
        <MyH3 color={'orange'} isButton>Hola soy un h3 con styled-components</MyH3>
        <ThemeProvider theme={light}>
       <Box>caja light</Box>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
       <Box>caja dark</Box>
       <BorderRounder>hola</BorderRounder>
        </ThemeProvider>
        </>
    )
}