from selenium import webdriver
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import time

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from selenium.common.exceptions import NoSuchElementException





def get_job_links(driver):
    job_links = []
    try:
        job_result_wrappers = driver.find_elements_by_css_selector(".job_result_wrapper")  
        print("Number of job result wrappers:", len(job_result_wrappers))
        
        for container in job_result_wrappers:
            try:
                # Find the "1-click apply" button within the job result wrapper
                apply_button = container.find_element_by_xpath(".//p[contains(text(), '1-click apply')]")
                
                # If the "1-click apply" button is found, extract the href attribute from the associated <a> tag
                if apply_button:
                    job_link = container.find_element_by_xpath(".//a").get_attribute("href")
                    job_links.append(job_link)
                    print("Found '1-click apply' button for this job listing. Job Link:", job_link)
            except NoSuchElementException:
                print("No '1-click apply' button found for this job listing. Continuing to the next one...")
                continue
        
        return job_links
    except NoSuchElementException:
        print("No job result wrappers found")
        




def get_job_listings(driver):
    try:
        job_links = get_job_links(driver)
        
        if job_links:
            for job_link in job_links:
                try:
                    # Visit the job link
                    driver.get(job_link)
                    time.sleep(10)
                    # Check if the "1-Click Apply" button exists on the page
                    try:
                        apply_button = driver.find_element_by_xpath("//button[contains(text(), '1-Click Apply')]")
                        # Click the "1-Click Apply" button
                        apply_button.click()
                        print("Clicked '1-Click Apply' button for job link:", job_link)
                        time.sleep(10)
                        
                    except NoSuchElementException:
                        print("'1-Click Apply' button not found for job link:", job_link)
                        continue
                except NoSuchElementException:
                    print("Error occurred while processing job link:", job_link)
                    time.sleep(10)
                    
        
        print("All job listings processed successfully")
    except NoSuchElementException:
        print("No job result wrappers found")
        
        

def main(driver,link):
    # Wait for the login to complete
    time.sleep(5)
    
    for i in range(1,20):
        # Now you can navigate to the job search page
        print("page number :",i)
        try:
            search_url = link.format(i)
            driver.get(search_url)
            print("Got the jobs ")
            get_job_listings(driver)
            time.sleep(10)
        except:
            continue
  
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
from selenium.webdriver.firefox.options import Options


if __name__ == "__main__":

    driver = webdriver.Chrome(executable_path=r'/Users/santhoshnama/Desktop/chromedriver')
    driver.get("https://www.ziprecruiter.com/authn/login?next_url=/profile/")
 
    # Login
    username = driver.find_element_by_id("email")
    password = driver.find_element_by_id("password")
    login_button = driver.find_element_by_xpath("//button[contains(text(),'Job Seeker Login')]")
    
    # Enter your login credentials
    username.send_keys("nagasanthosh241296@gmail.com")
    password.send_keys("Houston@1234")
    
    # Click the login button
    login_button.click()
    time.sleep(10000)
  
    try:
        # Run the main function with the existing driver instance
        main(driver,"https://www.ziprecruiter.com/jobs-search?search=python+developer&location=Houston%2C+TX&company=&refine_by_location_type=&radius=5000&days=5&refine_by_salary=&refine_by_employment=employment_type%3Aall&page={}")
    except:
        print("Reached End of Job post for Python Developer")
        
    print("Reached End of Job post for Python Developer")
    try:
        main(driver,"https://www.ziprecruiter.com/jobs-search?search=data+engineer&location=Houston%2C+TX&company=&refine_by_location_type=&radius=5000&days=5&refine_by_salary=&refine_by_employment=employment_type%3Aall&page={}")
    except:
        print("Reached End of Job post for Data Enginner")
        
    print("Reached End of Job post for Data Enginner")   
    try:
        main(driver,"https://www.ziprecruiter.com/jobs-search?search=software+engineer&location=Houston%2C+TX&company=&refine_by_location_type=&radius=5000&days=5&refine_by_salary=&refine_by_employment=employment_type%3Aall&page={}")
    except:
        print("Reached End of Job post for Software Enginner")
       
    print("Reached End of Job post for Software Enginner")
    try:
        main(driver,'https://www.ziprecruiter.com/jobs-search?search=software+tester&location=League+City%2C+TX&company=&refine_by_location_type=&radius=5000&days=5&refine_by_salary=&refine_by_employment=employment_type%3Aall&page={}')
    except:
        print('Reached End of job Post for Testing')
    print('Reached End of job Post for Testing')
        
        
  

    #Close the browser
    driver.quit()
