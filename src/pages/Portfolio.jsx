import * as S from './Portfolio.style';

const Portfolio = ({children}) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}

export default Portfolio