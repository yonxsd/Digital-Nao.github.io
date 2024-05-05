import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Login from "./Login"

test("renders content", () => {
    const login = {

    }

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<Login login={login} />)
})