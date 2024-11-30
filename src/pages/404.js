import React, { useCallback, Fragment } from "react";
import Head from "next/head"
import { useRouter } from "next/router";
import { Row, Col } from "react-bootstrap";
import MakeupBottom from "../components/makeup-bottom/makeup-bottom";
import NextButton from '../components/mui/next-button';
import SmallVimg from "../components/smallvimg/SmallVimg";

function Page404() {
    const router = useRouter()

    const goHome = useCallback((e) => {
        e.preventDefault()
        router.push("/")
    }, [])

    return (
        <Fragment>
            <Head>
                <title>Makeup Palace</title>
                <meta name='description' content='Fit For A Queen.'/>
            </Head>
            <section className="page404">
                <h1>404</h1>
                <p>
                    The page you are looking for might have been removed.
                </p>
                <NextButton onClick={goHome}>
                    Homepage
                </NextButton>
                <Row className="d-none d-sm-flex">
                    <Col>
                        <MakeupBottom />          
                    </Col>
                </Row>
                <SmallVimg />
            </section>
        </Fragment>
    )
}

export default Page404