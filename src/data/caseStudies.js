export const caseStudies = [
  {
    title: 'Incorrect OTP still let the user reset their password',
    problem:
      'During Forgot Password, entering the wrong OTP still moved the user forward to the New Password screen instead of blocking them.',
    found:
      'Requested a password reset, deliberately typed an incorrect OTP, and submitted it.',
    expected: 'The system should show "Invalid OTP, please try again" and keep the user on the OTP screen.',
    actual: 'The app skipped that check entirely and let the user proceed to set a new password.',
    investigation:
      'Repeated the flow with several wrong OTP values to confirm it wasn\u2019t a one-off, and checked whether any OTP validation was happening on the backend at all.',
    verification:
      'Retested the same flow with multiple incorrect OTP values after the fix and confirmed the user was correctly blocked every time.',
    result: 'fixed',
  },

  {
    title: 'Session not clearing after account deletion',
    problem:
      'After a user deleted their account, the mobile app occasionally still showed cached content as if the session were active.',
    found:
      'While testing the account deletion flow on Comic Smith, I deleted an account and then backgrounded and reopened the app instead of force-closing it.',
    expected: 'The app should immediately redirect to the login screen and clear all local session data.',
    actual: 'The home feed briefly reloaded with stale cached content before eventually redirecting.',
    investigation:
      'Reproduced the issue across multiple devices, checked whether it was timing-related, and compared behavior between force-closing and backgrounding the app.',
    verification:
      'After the fix, retested the exact same steps across both iOS and Android, plus a few timing variations, to confirm the session was cleared immediately in every case.',
    result: 'fixed',
  },

  {
    title: 'Password reset link accepted after expiry',
    problem: 'A password reset link continued to work after its stated expiry window had passed.',
    found:
      'Requested a password reset, waited past the documented expiry time, and then attempted to use the link.',
    expected: 'The link should be rejected with a clear "link expired" message.',
    actual: 'The link still allowed the password to be reset without any warning.',
    investigation:
      'Checked the timestamp returned by the API against the actual expiry enforcement, and confirmed the issue was isolated to the reset flow rather than login.',
    verification:
      'Retested with an expired link after the fix and confirmed it was correctly rejected with a clear error message.',
    result: 'fixed',
  },

  {
    title: 'Quiz difficulty mismatch for selected grade level',
    problem:
      'Users selecting a lower grade level in Spell Wizards would sometimes receive quiz questions intended for a higher grade.',
    found:
      'Ran through the onboarding flow multiple times with different grade selections and cross-checked the generated quiz content against the expected difficulty tier.',
    expected: 'Quiz content should match the difficulty tier associated with the selected grade.',
    actual: 'Roughly 1 in 5 sessions surfaced questions from an adjacent, higher grade tier.',
    investigation:
      'Logged the exact grade selection and the resulting question set for each session to identify a pattern, then narrowed it down to a specific content category.',
    verification:
      'Repeated the same grade-selection scenarios after the fix and confirmed the question set stayed within the correct tier across multiple runs.',
    result: 'fixed',
  },

  {
    title: 'Password rules didn\u2019t match between frontend and backend',
    problem:
      'The signup form said passwords needed at least 6 characters, but the server actually required 8.',
    found:
      'Signed up using a 6-character password exactly as the form asked for, and the request failed.',
    expected: 'The form should ask for the same password rules the server actually checks.',
    actual: 'The form accepted 6 characters, then the server rejected it with a generic error message.',
    investigation:
      'Compared the validation message shown on screen with the actual error returned by the API to confirm the two didn\u2019t match.',
    verification:
      'After the fix, retested with 6, 7, and 8-character passwords to confirm the form and the server now agreed.',
    result: 'fixed',
  },
  {
    title: 'Custom Agent setup was missing its core feature',
    problem:
      'The Custom Agent flow advertised letting users define their own data-extraction fields, but Step 1 had no way to add any.',
    found:
      'Walked through the Custom Agent setup as a new user would, looking for the "add custom field" option described in the feature.',
    expected: 'Step 1 should include a way to specify which fields the agent should extract.',
    actual: 'No such option existed anywhere in the step, so the core feature was unusable as described.',
    investigation:
      'Checked later steps in the flow in case the option had simply been placed elsewhere, and confirmed it was missing entirely rather than mislabeled.',
    verification:
      'Retested Step 1 after the fix and confirmed users could now add and save their own custom extraction fields.',
    result: 'fixed',
  },
]