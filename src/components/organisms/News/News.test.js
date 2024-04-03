import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { query } from "providers/NewsProvider";
import { News } from "./News";
import { renderWithProviders } from "helpers/renderWithProviders";
const mock = new MockAdapter(axios);

describe('News section', () => {

  afterEach( () => {
    mock.reset();
  })

  it('Displays error when the news are not loaded correctly', async () => {
    mock.onPost(process.env.REACT_APP_DATOCMS_API_URL, { query }).reply(500)
    renderWithProviders(<News/>)
    await screen.findByText(/Sorry/) 
  })
  
})