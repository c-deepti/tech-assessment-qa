Select Top 10
[customer_first_name],
[customer_last_name],
[customer_email]
From magento_offer
INNER Join magento_rule ON magento_offer.rule_id = magento_rule.rule_id
Where magento_offer.offer_type = 'Staff' AND magento_rule.created_in between DATEADD(DAY,-7,GETDATE()) and GETDATE()