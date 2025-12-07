# Time2Meet
when2meet but better

Goals: 
- autogenerates suggestions of free times for everyone
— 
On landing page, prompt user to name this meeting they’re planning, and then they click create meeting. or alternatively say, Invited to a meeting? Enter ID: 

If they created a meeting, the UI should look like a calendar asking them to select possible dates, and then a range of possible times, (this selector of possible types should also allow them to select the time zone. The default timezone should be the one of their local system.)

—
For the user side, they should be prompted to type their name to select their available times.

In actually selecting, users should be able to drag and slide to select a time range (or multiple)

There should also be an option for them to manually add a time range, where they select one of the available days provided by the host, and then add a time range (this is to help mobile users) 
– 
Then back on the host’s side, they should see the time ranges when people are available, and then the web app should suggest times based on ranges with highest number of people available. 
