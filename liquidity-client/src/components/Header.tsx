import { ReactElement, FC } from "react";

interface Props {
    title: String
}

const Header: FC<Props> = (props): ReactElement => {
    return (
        <div className='product-sub-nav'>
            <div className='product-sub-nav_container'> 
                {props.title}
            </div>
        </div>
    );
};

export default Header;