package com.community.ng.cucumber.stepdefs;

import com.community.ng.BroadleafNgDemoSiteApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = BroadleafNgDemoSiteApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
