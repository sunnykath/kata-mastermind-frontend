import { ReactElement, useState } from 'react';
import './Accordion.css'

interface IProps {
    title: string;
    content: ReactElement;
}


export default function Accordion(props : IProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleAccordionOnClick = (e: any) => {
        e.target.classList.toggle('active');
        setIsOpen(!isOpen);
    }

    const contentClass = "content " + (isOpen ? "open" : "closed");

    return (
        <div className="accordion">
            <div className="title" onClick={handleAccordionOnClick}>{props.title}</div>
            <div className={contentClass}>{props.content}</div>
        </div>
    );
}