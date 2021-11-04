import React, { useEffect, useState } from 'react'
import { Container, Grid, Menu, Accordion } from 'semantic-ui-react'
import { MyCustomOption } from '../../../app/common/custom/MyCustomOption'
import { dataFromSnapshot, getAllFAQs } from '../../../app/firestore/firebaseStore'
import './faq.scss'
import { FAQLoader } from './FAQLoader'

export const FAQ = () => {

    const [faqs, setFaqs] = useState([])

    const [activeOptionIndex, setActiveOptionIndex] = useState(0)
    const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1)

    const handleAccordianClick = (e, titleProps) => {
        const newIndex = activeAccordionIndex === titleProps.index ? -1 : titleProps.index
        setActiveAccordionIndex(newIndex)
    }

    const handleOptionClick = (index) => {
        setActiveAccordionIndex(-1)
        setActiveOptionIndex(index)
    }

    useEffect(() => {
        getAllFAQs({
            next: snapshot => setFaqs(snapshot.docs.map(docSnapshot => dataFromSnapshot(docSnapshot))),
            error: err => console.log(err)
        })
    }, [])

    useEffect(() => {
        console.log(faqs)
    }, [faqs])

    return (
        <div className='faq'>
            <Container>
                {faqs.length === 0 ? 
                    <FAQLoader /> :
                    <Grid>
                        <Grid.Column computer={5}>
                            {faqs.map(faq =>
                                <MyCustomOption
                                    key={faq.id}
                                    active={activeOptionIndex === faq.index}
                                    content={faq.name}
                                    onClick={() => handleOptionClick(faq.index)}
                                />)}
                        </Grid.Column>
                        <Grid.Column  computer={11}>
                            {faqs.map(faq =>
                                (activeOptionIndex === faq.index &&
                                    faq.questions.map((qa, i) =>
                                        <Accordion as={Menu} vertical key={i}>
                                            <Menu.Item>
                                                <Accordion.Title
                                                    active={activeAccordionIndex === i}
                                                    content={qa.question}
                                                    index={i}
                                                    onClick={handleAccordianClick}
                                                />
                                                <Accordion.Content active={activeAccordionIndex === i} content={qa.answer} />
                                            </Menu.Item>
                                        </Accordion>
                                    ))
                                )}
                        </Grid.Column>
                    </Grid>}
            </Container>
        </div>
    )
}