When(/^I go to the about page$/) do
  visit ('/static_pages/about')
end

Then(/^I should see 'About' as the title$/) do
  expect(page).to have_selector('h1', text: 'About')
end
