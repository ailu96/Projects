from playwright.sync_api import sync_playwright
import time
import random

# Function to simulate random human delay
def human_delay(min_time=1, max_time=3):
    time.sleep(random.uniform(min_time, max_time))

def get_job_links(page):
    job_links = []
    try:
        job_result_wrappers = page.query_selector_all(".job_result_wrapper")
        print("Number of job result wrappers:", len(job_result_wrappers))

        for container in job_result_wrappers:
            try:
                # Find the "1-click apply" button within the job result wrapper
                apply_button = container.query_selector("p:has-text('1-click apply')")

                # If the "1-click apply" button is found, extract the href attribute from the associated <a> tag
                if apply_button:
                    job_link = container.query_selector("a").get_attribute("href")
                    job_links.append(job_link)
                    print("Found '1-click apply' button for this job listing. Job Link:", job_link)
            except:
                print("No '1-click apply' button found for this job listing. Continuing to the next one...")
                continue

        return job_links
    except:
        print("No job result wrappers found")

def get_job_listings(page):
    try:
        job_links = get_job_links(page)

        if job_links:
            for job_link in job_links:
                try:
                    # Visit the job link
                    page.goto(job_link)
                    human_delay(5, 10)
                    # Check if the "1-Click Apply" button exists on the page
                    try:
                        apply_button = page.query_selector("button:has-text('1-Click Apply')")
                        # Click the "1-Click Apply" button
                        if apply_button:
                            apply_button.click()
                            print(f"Clicked '1-Click Apply' button for job link: {job_link}")
                        else:
                            print(f"'1-Click Apply' button not found for job link: {job_link}")
                    except:
                        print(f"'1-Click Apply' button not found for job link: {job_link}")
                        continue

                    human_delay(5, 10)
                except:
                    print(f"Error occurred while processing job link: {job_link}")
                    human_delay(5, 10)

        print("All job listings processed successfully")
    except:
        print("No job result wrappers found")

def main(page, link):
    human_delay(5, 8)

    for i in range(1, 20):
        # Navigate to the job search page
        print("Page number:", i)
        try:
            search_url = link.format(i)
            page.goto(search_url)
            print("Got the jobs")
            get_job_listings(page)
            human_delay(5, 10)
        except:
            continue

with sync_playwright() as p:
    # Launch the browser (set `headless=False` if you want to see the browser actions)
    browser = p.firefox.launch(headless=False)
    page = browser.new_page()

    # Open ZipRecruiter login page
    page.goto("https://www.ziprecruiter.com/authn/login?next_url=/profile/")
    
    # Log in
    page.fill('input[id="email"]', "nagasanthosh241296@gmail.com")
    human_delay()
    page.fill('input[id="password"]', "Houston@1234")
    human_delay()

    # Click the login button
    page.click("//button[contains(text(),'Job Seeker Login')]")
    human_delay(5, 10)

    # Start job search for different categories
    try:
        main(page, "https://www.ziprecruiter.com/jobs-search?search=python+developer&location=Houston%2C+TX&company=&refine_by_location_type=&radius=5000&days=5&refine_by_salary=&refine_by_employment=employment_type%3Aall&page={}")
    except:
        print("Reached End of Job post for Python Developer")

    print("Reached End of Job post for Python Developer")

    try:
        main(page, "https://www.ziprecruiter.com/jobs-search?search=data+engineer&location=Houston%2C+TX&company=&refine_by_location_type=&radius=5000&days=5&refine_by_salary=&refine_by_employment=employment_type%3Aall&page={}")
    except:
        print("Reached End of Job post for Data Engineer")

    print("Reached End of Job post for Data Engineer")

    try:
        main(page, "https://www.ziprecruiter.com/jobs-search?search=software+engineer&location=Houston%2C+TX&company=&refine_by_location_type=&radius=5000&days=5&refine_by_salary=&refine_by_employment=employment_type%3Aall&page={}")
    except:
        print("Reached End of Job post for Software Engineer")

    print("Reached End of Job post for Software Engineer")

    try:
        main(page, "https://www.ziprecruiter.com/jobs-search?search=software+tester&location=League+City%2C+TX&company=&refine_by_location_type=&radius=5000&days=5&refine_by_salary=&refine_by_employment=employment_type%3Aall&page={}")
    except:
        print("Reached End of Job post for Software Tester")

    print("Reached End of Job post for Software Tester")

    # Close the browser
    browser.close()
