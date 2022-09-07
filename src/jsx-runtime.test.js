/*
 * Copyright 2022 Dirk Rudolph
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { getByText } from "@testing-library/dom"

describe('hlx jsx runtime', () => {

    it('renders simple dom nodes', () => {
        const nodes = (
            <div>
                <h1>Hello World</h1>
                <p>This is a unordered list of numbers:</p>
                <ul>
                    {[1, 2, 3].map(number => <li>{number}</li>)}
                </ul>
                <a href="https://letmegooglethat.com/?q=what+is+jsx">Find out more</a>
            </div>
        )

        expect(nodes).toMatchSnapshot()
    })

    it('renders dom nodes with styles', () => {
        const nodes =
            <div>
                <p style={{ color: 'red', fontSize: 'large' }}>Hello World</p>
            </div>


        expect(nodes).toMatchSnapshot()
    })

    it('renders a fragment with mutliple children', () => {
        const nodes =
            <>
                <p>First Paragraph</p>
                <p>Second Paragraph</p>
                <p>Third Paragraph</p>
            </>


        expect(nodes).toMatchSnapshot()
    })

    it('renders a fragment with a single child', () => {
        const nodes = <>Text Content</>

        expect(nodes).toMatchSnapshot()
    })

    it('renders an empty fragment', () => {
        const nodes = <></>

        expect(nodes).toMatchSnapshot()
    })

    it('renders components', () => {
        const Component = ({ text }) => <p>{text}</p> // eslint-disable-line no-unused-vars
        const Container = ({ children }) => <p>{children}</p> // eslint-disable-line no-unused-vars
        const nodes = (
            <div>
                <Component text="foobar" />
                <Container>
                    Foo Bar
                    <em>Foo Bar</em>
                </Container>
            </div>
        )

        expect(nodes).toMatchSnapshot()
    })

    it('renders listeners', () => {
        let clicked = false
        const nodes = <button onclick={() => clicked = true}>Button</button>
        const button = getByText(nodes, 'Button')
        
        button.click()

        expect(clicked).toBeTruthy();
    })
})
